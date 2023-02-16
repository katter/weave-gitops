import React from "react";
import { Kind } from "../../lib/api/core/types.pb";
import EventsTable from "../EventsTable";
import Flex from "../Flex";
import InfoList, { InfoField } from "../InfoList";
import PageStatus from "../PageStatus";
import Spacer from "../Spacer";
import SubRouterTabs, { RouterTab } from "../SubRouterTabs";
import Text from "../Text";
import YamlView from "../YamlView";

interface Props {
  data: any;
  kind: Kind;
  infoFields: InfoField[];
  children?: any;
}

const ImageAutomationDetails = ({
  data,
  kind,
  infoFields,
  children,
}: Props) => {
  const { name, namespace, clusterName, suspended, conditions } = data;
  return (
    <Flex wide tall column>
      <Text size="large" semiBold titleHeight>
        {name}
      </Text>
      <Spacer margin="xs" />
      <PageStatus conditions={conditions} suspended={suspended} />
      <Spacer margin="xs" />
      {/* ImageUpdateAutomation sync is not supported yet and it'll be added in future PR */}
      {/* <SyncActions
          name={name}
          namespace={namespace}
          clusterName={clusterName}
          kind={kind}
        />
        <Spacer margin="xs" /> */}

      <SubRouterTabs>
        <RouterTab name="Details" path="details">
          <>
            <InfoList items={infoFields} />
            <Spacer margin="xs" />
            {children}
          </>
        </RouterTab>
        <RouterTab name="Events" path="events">
          <EventsTable
            namespace={namespace}
            involvedObject={{
              kind: kind,
              name: name,
              namespace: namespace,
              clusterName: clusterName,
            }}
          />
        </RouterTab>
        <RouterTab name="yaml" path="yaml">
          <YamlView
            yaml={data.yaml}
            object={{
              kind: kind,
              name: name,
              namespace: namespace,
            }}
          />
        </RouterTab>
      </SubRouterTabs>
    </Flex>
  );
};

export default ImageAutomationDetails;

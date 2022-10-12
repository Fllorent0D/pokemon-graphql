import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapCreateWithoutEncountersInput } from './encounter-condition-value-map-create-without-encounters.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapCreateOrConnectWithoutEncountersInput } from './encounter-condition-value-map-create-or-connect-without-encounters.input';
import { encounter_condition_value_mapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';

@InputType()
export class encounter_condition_value_mapCreateNestedManyWithoutEncountersInput {

    @Field(() => [encounter_condition_value_mapCreateWithoutEncountersInput], {nullable:true})
    @Type(() => encounter_condition_value_mapCreateWithoutEncountersInput)
    create?: Array<encounter_condition_value_mapCreateWithoutEncountersInput>;

    @Field(() => [encounter_condition_value_mapCreateOrConnectWithoutEncountersInput], {nullable:true})
    @Type(() => encounter_condition_value_mapCreateOrConnectWithoutEncountersInput)
    connectOrCreate?: Array<encounter_condition_value_mapCreateOrConnectWithoutEncountersInput>;

    @Field(() => [encounter_condition_value_mapWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    connect?: Array<encounter_condition_value_mapWhereUniqueInput>;
}

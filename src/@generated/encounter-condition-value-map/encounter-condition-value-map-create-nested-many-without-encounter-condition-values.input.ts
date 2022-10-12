import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapCreateWithoutEncounter_condition_valuesInput } from './encounter-condition-value-map-create-without-encounter-condition-values.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapCreateOrConnectWithoutEncounter_condition_valuesInput } from './encounter-condition-value-map-create-or-connect-without-encounter-condition-values.input';
import { encounter_condition_value_mapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';

@InputType()
export class encounter_condition_value_mapCreateNestedManyWithoutEncounter_condition_valuesInput {

    @Field(() => [encounter_condition_value_mapCreateWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_mapCreateWithoutEncounter_condition_valuesInput)
    create?: Array<encounter_condition_value_mapCreateWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_mapCreateOrConnectWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_mapCreateOrConnectWithoutEncounter_condition_valuesInput)
    connectOrCreate?: Array<encounter_condition_value_mapCreateOrConnectWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_mapWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    connect?: Array<encounter_condition_value_mapWhereUniqueInput>;
}

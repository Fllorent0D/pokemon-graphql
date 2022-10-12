import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_mapCreateWithoutEncounter_condition_valuesInput } from './encounter-condition-value-map-create-without-encounter-condition-values.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_mapCreateOrConnectWithoutEncounter_condition_valuesInput } from './encounter-condition-value-map-create-or-connect-without-encounter-condition-values.input';
import { encounter_condition_value_mapUpsertWithWhereUniqueWithoutEncounter_condition_valuesInput } from './encounter-condition-value-map-upsert-with-where-unique-without-encounter-condition-values.input';
import { encounter_condition_value_mapWhereUniqueInput } from './encounter-condition-value-map-where-unique.input';
import { encounter_condition_value_mapUpdateWithWhereUniqueWithoutEncounter_condition_valuesInput } from './encounter-condition-value-map-update-with-where-unique-without-encounter-condition-values.input';
import { encounter_condition_value_mapUpdateManyWithWhereWithoutEncounter_condition_valuesInput } from './encounter-condition-value-map-update-many-with-where-without-encounter-condition-values.input';
import { encounter_condition_value_mapScalarWhereInput } from './encounter-condition-value-map-scalar-where.input';

@InputType()
export class encounter_condition_value_mapUncheckedUpdateManyWithoutEncounter_condition_valuesNestedInput {

    @Field(() => [encounter_condition_value_mapCreateWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_mapCreateWithoutEncounter_condition_valuesInput)
    create?: Array<encounter_condition_value_mapCreateWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_mapCreateOrConnectWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_mapCreateOrConnectWithoutEncounter_condition_valuesInput)
    connectOrCreate?: Array<encounter_condition_value_mapCreateOrConnectWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_mapUpsertWithWhereUniqueWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_mapUpsertWithWhereUniqueWithoutEncounter_condition_valuesInput)
    upsert?: Array<encounter_condition_value_mapUpsertWithWhereUniqueWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_mapWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    set?: Array<encounter_condition_value_mapWhereUniqueInput>;

    @Field(() => [encounter_condition_value_mapWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    disconnect?: Array<encounter_condition_value_mapWhereUniqueInput>;

    @Field(() => [encounter_condition_value_mapWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    delete?: Array<encounter_condition_value_mapWhereUniqueInput>;

    @Field(() => [encounter_condition_value_mapWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_mapWhereUniqueInput)
    connect?: Array<encounter_condition_value_mapWhereUniqueInput>;

    @Field(() => [encounter_condition_value_mapUpdateWithWhereUniqueWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_mapUpdateWithWhereUniqueWithoutEncounter_condition_valuesInput)
    update?: Array<encounter_condition_value_mapUpdateWithWhereUniqueWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_mapUpdateManyWithWhereWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_mapUpdateManyWithWhereWithoutEncounter_condition_valuesInput)
    updateMany?: Array<encounter_condition_value_mapUpdateManyWithWhereWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_mapScalarWhereInput], {nullable:true})
    @Type(() => encounter_condition_value_mapScalarWhereInput)
    deleteMany?: Array<encounter_condition_value_mapScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_valuesCreateWithoutEncounter_conditionsInput } from './encounter-condition-values-create-without-encounter-conditions.input';
import { Type } from 'class-transformer';
import { encounter_condition_valuesCreateOrConnectWithoutEncounter_conditionsInput } from './encounter-condition-values-create-or-connect-without-encounter-conditions.input';
import { encounter_condition_valuesUpsertWithWhereUniqueWithoutEncounter_conditionsInput } from './encounter-condition-values-upsert-with-where-unique-without-encounter-conditions.input';
import { encounter_condition_valuesWhereUniqueInput } from './encounter-condition-values-where-unique.input';
import { encounter_condition_valuesUpdateWithWhereUniqueWithoutEncounter_conditionsInput } from './encounter-condition-values-update-with-where-unique-without-encounter-conditions.input';
import { encounter_condition_valuesUpdateManyWithWhereWithoutEncounter_conditionsInput } from './encounter-condition-values-update-many-with-where-without-encounter-conditions.input';
import { encounter_condition_valuesScalarWhereInput } from './encounter-condition-values-scalar-where.input';

@InputType()
export class encounter_condition_valuesUncheckedUpdateManyWithoutEncounter_conditionsNestedInput {

    @Field(() => [encounter_condition_valuesCreateWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_valuesCreateWithoutEncounter_conditionsInput)
    create?: Array<encounter_condition_valuesCreateWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_valuesCreateOrConnectWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_valuesCreateOrConnectWithoutEncounter_conditionsInput)
    connectOrCreate?: Array<encounter_condition_valuesCreateOrConnectWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_valuesUpsertWithWhereUniqueWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_valuesUpsertWithWhereUniqueWithoutEncounter_conditionsInput)
    upsert?: Array<encounter_condition_valuesUpsertWithWhereUniqueWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_valuesWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    set?: Array<encounter_condition_valuesWhereUniqueInput>;

    @Field(() => [encounter_condition_valuesWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    disconnect?: Array<encounter_condition_valuesWhereUniqueInput>;

    @Field(() => [encounter_condition_valuesWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    delete?: Array<encounter_condition_valuesWhereUniqueInput>;

    @Field(() => [encounter_condition_valuesWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_valuesWhereUniqueInput)
    connect?: Array<encounter_condition_valuesWhereUniqueInput>;

    @Field(() => [encounter_condition_valuesUpdateWithWhereUniqueWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_valuesUpdateWithWhereUniqueWithoutEncounter_conditionsInput)
    update?: Array<encounter_condition_valuesUpdateWithWhereUniqueWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_valuesUpdateManyWithWhereWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_valuesUpdateManyWithWhereWithoutEncounter_conditionsInput)
    updateMany?: Array<encounter_condition_valuesUpdateManyWithWhereWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_valuesScalarWhereInput], {nullable:true})
    @Type(() => encounter_condition_valuesScalarWhereInput)
    deleteMany?: Array<encounter_condition_valuesScalarWhereInput>;
}

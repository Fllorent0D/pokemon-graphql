import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput } from './encounter-condition-value-prose-create-without-encounter-condition-values.input';
import { Type } from 'class-transformer';
import { encounter_condition_value_proseCreateOrConnectWithoutEncounter_condition_valuesInput } from './encounter-condition-value-prose-create-or-connect-without-encounter-condition-values.input';
import { encounter_condition_value_proseUpsertWithWhereUniqueWithoutEncounter_condition_valuesInput } from './encounter-condition-value-prose-upsert-with-where-unique-without-encounter-condition-values.input';
import { encounter_condition_value_proseWhereUniqueInput } from './encounter-condition-value-prose-where-unique.input';
import { encounter_condition_value_proseUpdateWithWhereUniqueWithoutEncounter_condition_valuesInput } from './encounter-condition-value-prose-update-with-where-unique-without-encounter-condition-values.input';
import { encounter_condition_value_proseUpdateManyWithWhereWithoutEncounter_condition_valuesInput } from './encounter-condition-value-prose-update-many-with-where-without-encounter-condition-values.input';
import { encounter_condition_value_proseScalarWhereInput } from './encounter-condition-value-prose-scalar-where.input';

@InputType()
export class encounter_condition_value_proseUpdateManyWithoutEncounter_condition_valuesNestedInput {

    @Field(() => [encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput)
    create?: Array<encounter_condition_value_proseCreateWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_proseCreateOrConnectWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseCreateOrConnectWithoutEncounter_condition_valuesInput)
    connectOrCreate?: Array<encounter_condition_value_proseCreateOrConnectWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_proseUpsertWithWhereUniqueWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseUpsertWithWhereUniqueWithoutEncounter_condition_valuesInput)
    upsert?: Array<encounter_condition_value_proseUpsertWithWhereUniqueWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    set?: Array<encounter_condition_value_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_value_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    disconnect?: Array<encounter_condition_value_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_value_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    delete?: Array<encounter_condition_value_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_value_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_value_proseWhereUniqueInput)
    connect?: Array<encounter_condition_value_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_value_proseUpdateWithWhereUniqueWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseUpdateWithWhereUniqueWithoutEncounter_condition_valuesInput)
    update?: Array<encounter_condition_value_proseUpdateWithWhereUniqueWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_proseUpdateManyWithWhereWithoutEncounter_condition_valuesInput], {nullable:true})
    @Type(() => encounter_condition_value_proseUpdateManyWithWhereWithoutEncounter_condition_valuesInput)
    updateMany?: Array<encounter_condition_value_proseUpdateManyWithWhereWithoutEncounter_condition_valuesInput>;

    @Field(() => [encounter_condition_value_proseScalarWhereInput], {nullable:true})
    @Type(() => encounter_condition_value_proseScalarWhereInput)
    deleteMany?: Array<encounter_condition_value_proseScalarWhereInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_condition_proseCreateWithoutEncounter_conditionsInput } from './encounter-condition-prose-create-without-encounter-conditions.input';
import { Type } from 'class-transformer';
import { encounter_condition_proseCreateOrConnectWithoutEncounter_conditionsInput } from './encounter-condition-prose-create-or-connect-without-encounter-conditions.input';
import { encounter_condition_proseUpsertWithWhereUniqueWithoutEncounter_conditionsInput } from './encounter-condition-prose-upsert-with-where-unique-without-encounter-conditions.input';
import { encounter_condition_proseWhereUniqueInput } from './encounter-condition-prose-where-unique.input';
import { encounter_condition_proseUpdateWithWhereUniqueWithoutEncounter_conditionsInput } from './encounter-condition-prose-update-with-where-unique-without-encounter-conditions.input';
import { encounter_condition_proseUpdateManyWithWhereWithoutEncounter_conditionsInput } from './encounter-condition-prose-update-many-with-where-without-encounter-conditions.input';
import { encounter_condition_proseScalarWhereInput } from './encounter-condition-prose-scalar-where.input';

@InputType()
export class encounter_condition_proseUpdateManyWithoutEncounter_conditionsNestedInput {

    @Field(() => [encounter_condition_proseCreateWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_proseCreateWithoutEncounter_conditionsInput)
    create?: Array<encounter_condition_proseCreateWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_proseCreateOrConnectWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_proseCreateOrConnectWithoutEncounter_conditionsInput)
    connectOrCreate?: Array<encounter_condition_proseCreateOrConnectWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_proseUpsertWithWhereUniqueWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_proseUpsertWithWhereUniqueWithoutEncounter_conditionsInput)
    upsert?: Array<encounter_condition_proseUpsertWithWhereUniqueWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    set?: Array<encounter_condition_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    disconnect?: Array<encounter_condition_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    delete?: Array<encounter_condition_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_proseWhereUniqueInput], {nullable:true})
    @Type(() => encounter_condition_proseWhereUniqueInput)
    connect?: Array<encounter_condition_proseWhereUniqueInput>;

    @Field(() => [encounter_condition_proseUpdateWithWhereUniqueWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_proseUpdateWithWhereUniqueWithoutEncounter_conditionsInput)
    update?: Array<encounter_condition_proseUpdateWithWhereUniqueWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_proseUpdateManyWithWhereWithoutEncounter_conditionsInput], {nullable:true})
    @Type(() => encounter_condition_proseUpdateManyWithWhereWithoutEncounter_conditionsInput)
    updateMany?: Array<encounter_condition_proseUpdateManyWithWhereWithoutEncounter_conditionsInput>;

    @Field(() => [encounter_condition_proseScalarWhereInput], {nullable:true})
    @Type(() => encounter_condition_proseScalarWhereInput)
    deleteMany?: Array<encounter_condition_proseScalarWhereInput>;
}

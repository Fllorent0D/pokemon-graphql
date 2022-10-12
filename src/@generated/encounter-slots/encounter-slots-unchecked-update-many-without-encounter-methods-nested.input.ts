import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encounter_slotsCreateWithoutEncounter_methodsInput } from './encounter-slots-create-without-encounter-methods.input';
import { Type } from 'class-transformer';
import { encounter_slotsCreateOrConnectWithoutEncounter_methodsInput } from './encounter-slots-create-or-connect-without-encounter-methods.input';
import { encounter_slotsUpsertWithWhereUniqueWithoutEncounter_methodsInput } from './encounter-slots-upsert-with-where-unique-without-encounter-methods.input';
import { encounter_slotsWhereUniqueInput } from './encounter-slots-where-unique.input';
import { encounter_slotsUpdateWithWhereUniqueWithoutEncounter_methodsInput } from './encounter-slots-update-with-where-unique-without-encounter-methods.input';
import { encounter_slotsUpdateManyWithWhereWithoutEncounter_methodsInput } from './encounter-slots-update-many-with-where-without-encounter-methods.input';
import { encounter_slotsScalarWhereInput } from './encounter-slots-scalar-where.input';

@InputType()
export class encounter_slotsUncheckedUpdateManyWithoutEncounter_methodsNestedInput {

    @Field(() => [encounter_slotsCreateWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_slotsCreateWithoutEncounter_methodsInput)
    create?: Array<encounter_slotsCreateWithoutEncounter_methodsInput>;

    @Field(() => [encounter_slotsCreateOrConnectWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_slotsCreateOrConnectWithoutEncounter_methodsInput)
    connectOrCreate?: Array<encounter_slotsCreateOrConnectWithoutEncounter_methodsInput>;

    @Field(() => [encounter_slotsUpsertWithWhereUniqueWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_slotsUpsertWithWhereUniqueWithoutEncounter_methodsInput)
    upsert?: Array<encounter_slotsUpsertWithWhereUniqueWithoutEncounter_methodsInput>;

    @Field(() => [encounter_slotsWhereUniqueInput], {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    set?: Array<encounter_slotsWhereUniqueInput>;

    @Field(() => [encounter_slotsWhereUniqueInput], {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    disconnect?: Array<encounter_slotsWhereUniqueInput>;

    @Field(() => [encounter_slotsWhereUniqueInput], {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    delete?: Array<encounter_slotsWhereUniqueInput>;

    @Field(() => [encounter_slotsWhereUniqueInput], {nullable:true})
    @Type(() => encounter_slotsWhereUniqueInput)
    connect?: Array<encounter_slotsWhereUniqueInput>;

    @Field(() => [encounter_slotsUpdateWithWhereUniqueWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_slotsUpdateWithWhereUniqueWithoutEncounter_methodsInput)
    update?: Array<encounter_slotsUpdateWithWhereUniqueWithoutEncounter_methodsInput>;

    @Field(() => [encounter_slotsUpdateManyWithWhereWithoutEncounter_methodsInput], {nullable:true})
    @Type(() => encounter_slotsUpdateManyWithWhereWithoutEncounter_methodsInput)
    updateMany?: Array<encounter_slotsUpdateManyWithWhereWithoutEncounter_methodsInput>;

    @Field(() => [encounter_slotsScalarWhereInput], {nullable:true})
    @Type(() => encounter_slotsScalarWhereInput)
    deleteMany?: Array<encounter_slotsScalarWhereInput>;
}

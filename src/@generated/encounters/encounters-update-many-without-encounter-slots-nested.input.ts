import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersCreateWithoutEncounter_slotsInput } from './encounters-create-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { encountersCreateOrConnectWithoutEncounter_slotsInput } from './encounters-create-or-connect-without-encounter-slots.input';
import { encountersUpsertWithWhereUniqueWithoutEncounter_slotsInput } from './encounters-upsert-with-where-unique-without-encounter-slots.input';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';
import { encountersUpdateWithWhereUniqueWithoutEncounter_slotsInput } from './encounters-update-with-where-unique-without-encounter-slots.input';
import { encountersUpdateManyWithWhereWithoutEncounter_slotsInput } from './encounters-update-many-with-where-without-encounter-slots.input';
import { encountersScalarWhereInput } from './encounters-scalar-where.input';

@InputType()
export class encountersUpdateManyWithoutEncounter_slotsNestedInput {

    @Field(() => [encountersCreateWithoutEncounter_slotsInput], {nullable:true})
    @Type(() => encountersCreateWithoutEncounter_slotsInput)
    create?: Array<encountersCreateWithoutEncounter_slotsInput>;

    @Field(() => [encountersCreateOrConnectWithoutEncounter_slotsInput], {nullable:true})
    @Type(() => encountersCreateOrConnectWithoutEncounter_slotsInput)
    connectOrCreate?: Array<encountersCreateOrConnectWithoutEncounter_slotsInput>;

    @Field(() => [encountersUpsertWithWhereUniqueWithoutEncounter_slotsInput], {nullable:true})
    @Type(() => encountersUpsertWithWhereUniqueWithoutEncounter_slotsInput)
    upsert?: Array<encountersUpsertWithWhereUniqueWithoutEncounter_slotsInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    set?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    disconnect?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    delete?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    connect?: Array<encountersWhereUniqueInput>;

    @Field(() => [encountersUpdateWithWhereUniqueWithoutEncounter_slotsInput], {nullable:true})
    @Type(() => encountersUpdateWithWhereUniqueWithoutEncounter_slotsInput)
    update?: Array<encountersUpdateWithWhereUniqueWithoutEncounter_slotsInput>;

    @Field(() => [encountersUpdateManyWithWhereWithoutEncounter_slotsInput], {nullable:true})
    @Type(() => encountersUpdateManyWithWhereWithoutEncounter_slotsInput)
    updateMany?: Array<encountersUpdateManyWithWhereWithoutEncounter_slotsInput>;

    @Field(() => [encountersScalarWhereInput], {nullable:true})
    @Type(() => encountersScalarWhereInput)
    deleteMany?: Array<encountersScalarWhereInput>;
}

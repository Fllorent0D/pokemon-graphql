import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { encountersCreateWithoutEncounter_slotsInput } from './encounters-create-without-encounter-slots.input';
import { Type } from 'class-transformer';
import { encountersCreateOrConnectWithoutEncounter_slotsInput } from './encounters-create-or-connect-without-encounter-slots.input';
import { encountersWhereUniqueInput } from './encounters-where-unique.input';

@InputType()
export class encountersCreateNestedManyWithoutEncounter_slotsInput {

    @Field(() => [encountersCreateWithoutEncounter_slotsInput], {nullable:true})
    @Type(() => encountersCreateWithoutEncounter_slotsInput)
    create?: Array<encountersCreateWithoutEncounter_slotsInput>;

    @Field(() => [encountersCreateOrConnectWithoutEncounter_slotsInput], {nullable:true})
    @Type(() => encountersCreateOrConnectWithoutEncounter_slotsInput)
    connectOrCreate?: Array<encountersCreateOrConnectWithoutEncounter_slotsInput>;

    @Field(() => [encountersWhereUniqueInput], {nullable:true})
    @Type(() => encountersWhereUniqueInput)
    connect?: Array<encountersWhereUniqueInput>;
}

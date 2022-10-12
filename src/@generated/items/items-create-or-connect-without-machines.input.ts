import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutMachinesInput } from './items-create-without-machines.input';

@InputType()
export class itemsCreateOrConnectWithoutMachinesInput {

    @Field(() => itemsWhereUniqueInput, {nullable:false})
    @Type(() => itemsWhereUniqueInput)
    where!: itemsWhereUniqueInput;

    @Field(() => itemsCreateWithoutMachinesInput, {nullable:false})
    @Type(() => itemsCreateWithoutMachinesInput)
    create!: itemsCreateWithoutMachinesInput;
}

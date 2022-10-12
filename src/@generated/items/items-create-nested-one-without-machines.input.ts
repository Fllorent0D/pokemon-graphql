import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutMachinesInput } from './items-create-without-machines.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutMachinesInput } from './items-create-or-connect-without-machines.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';

@InputType()
export class itemsCreateNestedOneWithoutMachinesInput {

    @Field(() => itemsCreateWithoutMachinesInput, {nullable:true})
    @Type(() => itemsCreateWithoutMachinesInput)
    create?: itemsCreateWithoutMachinesInput;

    @Field(() => itemsCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: itemsCreateOrConnectWithoutMachinesInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;
}

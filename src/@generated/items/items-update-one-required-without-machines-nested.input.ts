import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsCreateWithoutMachinesInput } from './items-create-without-machines.input';
import { Type } from 'class-transformer';
import { itemsCreateOrConnectWithoutMachinesInput } from './items-create-or-connect-without-machines.input';
import { itemsUpsertWithoutMachinesInput } from './items-upsert-without-machines.input';
import { itemsWhereUniqueInput } from './items-where-unique.input';
import { itemsUpdateWithoutMachinesInput } from './items-update-without-machines.input';

@InputType()
export class itemsUpdateOneRequiredWithoutMachinesNestedInput {

    @Field(() => itemsCreateWithoutMachinesInput, {nullable:true})
    @Type(() => itemsCreateWithoutMachinesInput)
    create?: itemsCreateWithoutMachinesInput;

    @Field(() => itemsCreateOrConnectWithoutMachinesInput, {nullable:true})
    @Type(() => itemsCreateOrConnectWithoutMachinesInput)
    connectOrCreate?: itemsCreateOrConnectWithoutMachinesInput;

    @Field(() => itemsUpsertWithoutMachinesInput, {nullable:true})
    @Type(() => itemsUpsertWithoutMachinesInput)
    upsert?: itemsUpsertWithoutMachinesInput;

    @Field(() => itemsWhereUniqueInput, {nullable:true})
    @Type(() => itemsWhereUniqueInput)
    connect?: itemsWhereUniqueInput;

    @Field(() => itemsUpdateWithoutMachinesInput, {nullable:true})
    @Type(() => itemsUpdateWithoutMachinesInput)
    update?: itemsUpdateWithoutMachinesInput;
}

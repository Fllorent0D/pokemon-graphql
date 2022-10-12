import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutMachinesInput } from './items-update-without-machines.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutMachinesInput } from './items-create-without-machines.input';

@InputType()
export class itemsUpsertWithoutMachinesInput {

    @Field(() => itemsUpdateWithoutMachinesInput, {nullable:false})
    @Type(() => itemsUpdateWithoutMachinesInput)
    update!: itemsUpdateWithoutMachinesInput;

    @Field(() => itemsCreateWithoutMachinesInput, {nullable:false})
    @Type(() => itemsCreateWithoutMachinesInput)
    create!: itemsCreateWithoutMachinesInput;
}

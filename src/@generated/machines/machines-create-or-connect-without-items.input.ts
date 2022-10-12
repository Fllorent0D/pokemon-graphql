import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { machinesCreateWithoutItemsInput } from './machines-create-without-items.input';

@InputType()
export class machinesCreateOrConnectWithoutItemsInput {

    @Field(() => machinesWhereUniqueInput, {nullable:false})
    @Type(() => machinesWhereUniqueInput)
    where!: machinesWhereUniqueInput;

    @Field(() => machinesCreateWithoutItemsInput, {nullable:false})
    @Type(() => machinesCreateWithoutItemsInput)
    create!: machinesCreateWithoutItemsInput;
}

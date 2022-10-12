import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { machinesWhereUniqueInput } from './machines-where-unique.input';
import { Type } from 'class-transformer';
import { machinesUpdateWithoutItemsInput } from './machines-update-without-items.input';
import { machinesCreateWithoutItemsInput } from './machines-create-without-items.input';

@InputType()
export class machinesUpsertWithWhereUniqueWithoutItemsInput {

    @Field(() => machinesWhereUniqueInput, {nullable:false})
    @Type(() => machinesWhereUniqueInput)
    where!: machinesWhereUniqueInput;

    @Field(() => machinesUpdateWithoutItemsInput, {nullable:false})
    @Type(() => machinesUpdateWithoutItemsInput)
    update!: machinesUpdateWithoutItemsInput;

    @Field(() => machinesCreateWithoutItemsInput, {nullable:false})
    @Type(() => machinesCreateWithoutItemsInput)
    create!: machinesCreateWithoutItemsInput;
}

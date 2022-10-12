import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutBerriesInput } from './items-update-without-berries.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutBerriesInput } from './items-create-without-berries.input';

@InputType()
export class itemsUpsertWithoutBerriesInput {

    @Field(() => itemsUpdateWithoutBerriesInput, {nullable:false})
    @Type(() => itemsUpdateWithoutBerriesInput)
    update!: itemsUpdateWithoutBerriesInput;

    @Field(() => itemsCreateWithoutBerriesInput, {nullable:false})
    @Type(() => itemsCreateWithoutBerriesInput)
    create!: itemsCreateWithoutBerriesInput;
}

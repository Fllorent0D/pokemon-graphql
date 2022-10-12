import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_fling_effectsUpdateWithoutItemsInput } from './item-fling-effects-update-without-items.input';
import { Type } from 'class-transformer';
import { item_fling_effectsCreateWithoutItemsInput } from './item-fling-effects-create-without-items.input';

@InputType()
export class item_fling_effectsUpsertWithoutItemsInput {

    @Field(() => item_fling_effectsUpdateWithoutItemsInput, {nullable:false})
    @Type(() => item_fling_effectsUpdateWithoutItemsInput)
    update!: item_fling_effectsUpdateWithoutItemsInput;

    @Field(() => item_fling_effectsCreateWithoutItemsInput, {nullable:false})
    @Type(() => item_fling_effectsCreateWithoutItemsInput)
    create!: item_fling_effectsCreateWithoutItemsInput;
}

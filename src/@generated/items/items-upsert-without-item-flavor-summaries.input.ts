import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { itemsUpdateWithoutItem_flavor_summariesInput } from './items-update-without-item-flavor-summaries.input';
import { Type } from 'class-transformer';
import { itemsCreateWithoutItem_flavor_summariesInput } from './items-create-without-item-flavor-summaries.input';

@InputType()
export class itemsUpsertWithoutItem_flavor_summariesInput {

    @Field(() => itemsUpdateWithoutItem_flavor_summariesInput, {nullable:false})
    @Type(() => itemsUpdateWithoutItem_flavor_summariesInput)
    update!: itemsUpdateWithoutItem_flavor_summariesInput;

    @Field(() => itemsCreateWithoutItem_flavor_summariesInput, {nullable:false})
    @Type(() => itemsCreateWithoutItem_flavor_summariesInput)
    create!: itemsCreateWithoutItem_flavor_summariesInput;
}

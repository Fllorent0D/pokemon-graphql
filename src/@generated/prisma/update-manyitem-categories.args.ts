import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { item_categoriesUpdateManyMutationInput } from '../item-categories/item-categories-update-many-mutation.input';
import { Type } from 'class-transformer';
import { item_categoriesWhereInput } from '../item-categories/item-categories-where.input';

@ArgsType()
export class UpdateManyitemCategoriesArgs {

    @Field(() => item_categoriesUpdateManyMutationInput, {nullable:false})
    @Type(() => item_categoriesUpdateManyMutationInput)
    data!: item_categoriesUpdateManyMutationInput;

    @Field(() => item_categoriesWhereInput, {nullable:true})
    @Type(() => item_categoriesWhereInput)
    where?: item_categoriesWhereInput;
}

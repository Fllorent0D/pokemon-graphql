import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_meta_category_proseWhereInput } from '../move-meta-category-prose/move-meta-category-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveMetaCategoryProseArgs {

    @Field(() => move_meta_category_proseWhereInput, {nullable:true})
    @Type(() => move_meta_category_proseWhereInput)
    where?: move_meta_category_proseWhereInput;
}

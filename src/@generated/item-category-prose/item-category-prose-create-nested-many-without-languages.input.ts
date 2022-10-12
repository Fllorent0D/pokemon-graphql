import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseCreateWithoutLanguagesInput } from './item-category-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_category_proseCreateOrConnectWithoutLanguagesInput } from './item-category-prose-create-or-connect-without-languages.input';
import { item_category_proseWhereUniqueInput } from './item-category-prose-where-unique.input';

@InputType()
export class item_category_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [item_category_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_category_proseCreateWithoutLanguagesInput)
    create?: Array<item_category_proseCreateWithoutLanguagesInput>;

    @Field(() => [item_category_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_category_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_category_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_category_proseWhereUniqueInput)
    connect?: Array<item_category_proseWhereUniqueInput>;
}

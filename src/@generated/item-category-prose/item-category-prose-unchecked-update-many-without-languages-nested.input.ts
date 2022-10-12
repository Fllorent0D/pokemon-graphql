import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { item_category_proseCreateWithoutLanguagesInput } from './item-category-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { item_category_proseCreateOrConnectWithoutLanguagesInput } from './item-category-prose-create-or-connect-without-languages.input';
import { item_category_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './item-category-prose-upsert-with-where-unique-without-languages.input';
import { item_category_proseWhereUniqueInput } from './item-category-prose-where-unique.input';
import { item_category_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './item-category-prose-update-with-where-unique-without-languages.input';
import { item_category_proseUpdateManyWithWhereWithoutLanguagesInput } from './item-category-prose-update-many-with-where-without-languages.input';
import { item_category_proseScalarWhereInput } from './item-category-prose-scalar-where.input';

@InputType()
export class item_category_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [item_category_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => item_category_proseCreateWithoutLanguagesInput)
    create?: Array<item_category_proseCreateWithoutLanguagesInput>;

    @Field(() => [item_category_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => item_category_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<item_category_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [item_category_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_category_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<item_category_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_category_proseWhereUniqueInput)
    set?: Array<item_category_proseWhereUniqueInput>;

    @Field(() => [item_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_category_proseWhereUniqueInput)
    disconnect?: Array<item_category_proseWhereUniqueInput>;

    @Field(() => [item_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_category_proseWhereUniqueInput)
    delete?: Array<item_category_proseWhereUniqueInput>;

    @Field(() => [item_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => item_category_proseWhereUniqueInput)
    connect?: Array<item_category_proseWhereUniqueInput>;

    @Field(() => [item_category_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => item_category_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<item_category_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [item_category_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => item_category_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<item_category_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [item_category_proseScalarWhereInput], {nullable:true})
    @Type(() => item_category_proseScalarWhereInput)
    deleteMany?: Array<item_category_proseScalarWhereInput>;
}

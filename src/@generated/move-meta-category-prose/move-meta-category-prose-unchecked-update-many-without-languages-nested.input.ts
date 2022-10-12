import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseCreateWithoutLanguagesInput } from './move-meta-category-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseCreateOrConnectWithoutLanguagesInput } from './move-meta-category-prose-create-or-connect-without-languages.input';
import { move_meta_category_proseUpsertWithWhereUniqueWithoutLanguagesInput } from './move-meta-category-prose-upsert-with-where-unique-without-languages.input';
import { move_meta_category_proseWhereUniqueInput } from './move-meta-category-prose-where-unique.input';
import { move_meta_category_proseUpdateWithWhereUniqueWithoutLanguagesInput } from './move-meta-category-prose-update-with-where-unique-without-languages.input';
import { move_meta_category_proseUpdateManyWithWhereWithoutLanguagesInput } from './move-meta-category-prose-update-many-with-where-without-languages.input';
import { move_meta_category_proseScalarWhereInput } from './move-meta-category-prose-scalar-where.input';

@InputType()
export class move_meta_category_proseUncheckedUpdateManyWithoutLanguagesNestedInput {

    @Field(() => [move_meta_category_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_category_proseCreateWithoutLanguagesInput)
    create?: Array<move_meta_category_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_meta_category_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_category_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_meta_category_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_meta_category_proseUpsertWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_category_proseUpsertWithWhereUniqueWithoutLanguagesInput)
    upsert?: Array<move_meta_category_proseUpsertWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_meta_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    set?: Array<move_meta_category_proseWhereUniqueInput>;

    @Field(() => [move_meta_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    disconnect?: Array<move_meta_category_proseWhereUniqueInput>;

    @Field(() => [move_meta_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    delete?: Array<move_meta_category_proseWhereUniqueInput>;

    @Field(() => [move_meta_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    connect?: Array<move_meta_category_proseWhereUniqueInput>;

    @Field(() => [move_meta_category_proseUpdateWithWhereUniqueWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_category_proseUpdateWithWhereUniqueWithoutLanguagesInput)
    update?: Array<move_meta_category_proseUpdateWithWhereUniqueWithoutLanguagesInput>;

    @Field(() => [move_meta_category_proseUpdateManyWithWhereWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_category_proseUpdateManyWithWhereWithoutLanguagesInput)
    updateMany?: Array<move_meta_category_proseUpdateManyWithWhereWithoutLanguagesInput>;

    @Field(() => [move_meta_category_proseScalarWhereInput], {nullable:true})
    @Type(() => move_meta_category_proseScalarWhereInput)
    deleteMany?: Array<move_meta_category_proseScalarWhereInput>;
}

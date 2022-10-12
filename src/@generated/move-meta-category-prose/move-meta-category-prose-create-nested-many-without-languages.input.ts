import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_category_proseCreateWithoutLanguagesInput } from './move-meta-category-prose-create-without-languages.input';
import { Type } from 'class-transformer';
import { move_meta_category_proseCreateOrConnectWithoutLanguagesInput } from './move-meta-category-prose-create-or-connect-without-languages.input';
import { move_meta_category_proseWhereUniqueInput } from './move-meta-category-prose-where-unique.input';

@InputType()
export class move_meta_category_proseCreateNestedManyWithoutLanguagesInput {

    @Field(() => [move_meta_category_proseCreateWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_category_proseCreateWithoutLanguagesInput)
    create?: Array<move_meta_category_proseCreateWithoutLanguagesInput>;

    @Field(() => [move_meta_category_proseCreateOrConnectWithoutLanguagesInput], {nullable:true})
    @Type(() => move_meta_category_proseCreateOrConnectWithoutLanguagesInput)
    connectOrCreate?: Array<move_meta_category_proseCreateOrConnectWithoutLanguagesInput>;

    @Field(() => [move_meta_category_proseWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_category_proseWhereUniqueInput)
    connect?: Array<move_meta_category_proseWhereUniqueInput>;
}

import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaCreateWithoutMove_meta_categoriesInput } from './move-meta-create-without-move-meta-categories.input';
import { Type } from 'class-transformer';
import { move_metaCreateOrConnectWithoutMove_meta_categoriesInput } from './move-meta-create-or-connect-without-move-meta-categories.input';
import { move_metaWhereUniqueInput } from './move-meta-where-unique.input';

@InputType()
export class move_metaUncheckedCreateNestedManyWithoutMove_meta_categoriesInput {

    @Field(() => [move_metaCreateWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_metaCreateWithoutMove_meta_categoriesInput)
    create?: Array<move_metaCreateWithoutMove_meta_categoriesInput>;

    @Field(() => [move_metaCreateOrConnectWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_metaCreateOrConnectWithoutMove_meta_categoriesInput)
    connectOrCreate?: Array<move_metaCreateOrConnectWithoutMove_meta_categoriesInput>;

    @Field(() => [move_metaWhereUniqueInput], {nullable:true})
    @Type(() => move_metaWhereUniqueInput)
    connect?: Array<move_metaWhereUniqueInput>;
}

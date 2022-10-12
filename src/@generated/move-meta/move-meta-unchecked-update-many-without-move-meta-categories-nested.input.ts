import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaCreateWithoutMove_meta_categoriesInput } from './move-meta-create-without-move-meta-categories.input';
import { Type } from 'class-transformer';
import { move_metaCreateOrConnectWithoutMove_meta_categoriesInput } from './move-meta-create-or-connect-without-move-meta-categories.input';
import { move_metaUpsertWithWhereUniqueWithoutMove_meta_categoriesInput } from './move-meta-upsert-with-where-unique-without-move-meta-categories.input';
import { move_metaWhereUniqueInput } from './move-meta-where-unique.input';
import { move_metaUpdateWithWhereUniqueWithoutMove_meta_categoriesInput } from './move-meta-update-with-where-unique-without-move-meta-categories.input';
import { move_metaUpdateManyWithWhereWithoutMove_meta_categoriesInput } from './move-meta-update-many-with-where-without-move-meta-categories.input';
import { move_metaScalarWhereInput } from './move-meta-scalar-where.input';

@InputType()
export class move_metaUncheckedUpdateManyWithoutMove_meta_categoriesNestedInput {

    @Field(() => [move_metaCreateWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_metaCreateWithoutMove_meta_categoriesInput)
    create?: Array<move_metaCreateWithoutMove_meta_categoriesInput>;

    @Field(() => [move_metaCreateOrConnectWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_metaCreateOrConnectWithoutMove_meta_categoriesInput)
    connectOrCreate?: Array<move_metaCreateOrConnectWithoutMove_meta_categoriesInput>;

    @Field(() => [move_metaUpsertWithWhereUniqueWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_metaUpsertWithWhereUniqueWithoutMove_meta_categoriesInput)
    upsert?: Array<move_metaUpsertWithWhereUniqueWithoutMove_meta_categoriesInput>;

    @Field(() => [move_metaWhereUniqueInput], {nullable:true})
    @Type(() => move_metaWhereUniqueInput)
    set?: Array<move_metaWhereUniqueInput>;

    @Field(() => [move_metaWhereUniqueInput], {nullable:true})
    @Type(() => move_metaWhereUniqueInput)
    disconnect?: Array<move_metaWhereUniqueInput>;

    @Field(() => [move_metaWhereUniqueInput], {nullable:true})
    @Type(() => move_metaWhereUniqueInput)
    delete?: Array<move_metaWhereUniqueInput>;

    @Field(() => [move_metaWhereUniqueInput], {nullable:true})
    @Type(() => move_metaWhereUniqueInput)
    connect?: Array<move_metaWhereUniqueInput>;

    @Field(() => [move_metaUpdateWithWhereUniqueWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_metaUpdateWithWhereUniqueWithoutMove_meta_categoriesInput)
    update?: Array<move_metaUpdateWithWhereUniqueWithoutMove_meta_categoriesInput>;

    @Field(() => [move_metaUpdateManyWithWhereWithoutMove_meta_categoriesInput], {nullable:true})
    @Type(() => move_metaUpdateManyWithWhereWithoutMove_meta_categoriesInput)
    updateMany?: Array<move_metaUpdateManyWithWhereWithoutMove_meta_categoriesInput>;

    @Field(() => [move_metaScalarWhereInput], {nullable:true})
    @Type(() => move_metaScalarWhereInput)
    deleteMany?: Array<move_metaScalarWhereInput>;
}

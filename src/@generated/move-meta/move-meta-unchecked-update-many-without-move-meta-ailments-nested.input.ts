import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaCreateWithoutMove_meta_ailmentsInput } from './move-meta-create-without-move-meta-ailments.input';
import { Type } from 'class-transformer';
import { move_metaCreateOrConnectWithoutMove_meta_ailmentsInput } from './move-meta-create-or-connect-without-move-meta-ailments.input';
import { move_metaUpsertWithWhereUniqueWithoutMove_meta_ailmentsInput } from './move-meta-upsert-with-where-unique-without-move-meta-ailments.input';
import { move_metaWhereUniqueInput } from './move-meta-where-unique.input';
import { move_metaUpdateWithWhereUniqueWithoutMove_meta_ailmentsInput } from './move-meta-update-with-where-unique-without-move-meta-ailments.input';
import { move_metaUpdateManyWithWhereWithoutMove_meta_ailmentsInput } from './move-meta-update-many-with-where-without-move-meta-ailments.input';
import { move_metaScalarWhereInput } from './move-meta-scalar-where.input';

@InputType()
export class move_metaUncheckedUpdateManyWithoutMove_meta_ailmentsNestedInput {

    @Field(() => [move_metaCreateWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_metaCreateWithoutMove_meta_ailmentsInput)
    create?: Array<move_metaCreateWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_metaCreateOrConnectWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_metaCreateOrConnectWithoutMove_meta_ailmentsInput)
    connectOrCreate?: Array<move_metaCreateOrConnectWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_metaUpsertWithWhereUniqueWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_metaUpsertWithWhereUniqueWithoutMove_meta_ailmentsInput)
    upsert?: Array<move_metaUpsertWithWhereUniqueWithoutMove_meta_ailmentsInput>;

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

    @Field(() => [move_metaUpdateWithWhereUniqueWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_metaUpdateWithWhereUniqueWithoutMove_meta_ailmentsInput)
    update?: Array<move_metaUpdateWithWhereUniqueWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_metaUpdateManyWithWhereWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_metaUpdateManyWithWhereWithoutMove_meta_ailmentsInput)
    updateMany?: Array<move_metaUpdateManyWithWhereWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_metaScalarWhereInput], {nullable:true})
    @Type(() => move_metaScalarWhereInput)
    deleteMany?: Array<move_metaScalarWhereInput>;
}

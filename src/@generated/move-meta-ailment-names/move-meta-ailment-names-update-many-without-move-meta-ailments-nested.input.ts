import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput } from './move-meta-ailment-names-create-without-move-meta-ailments.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesCreateOrConnectWithoutMove_meta_ailmentsInput } from './move-meta-ailment-names-create-or-connect-without-move-meta-ailments.input';
import { move_meta_ailment_namesUpsertWithWhereUniqueWithoutMove_meta_ailmentsInput } from './move-meta-ailment-names-upsert-with-where-unique-without-move-meta-ailments.input';
import { move_meta_ailment_namesWhereUniqueInput } from './move-meta-ailment-names-where-unique.input';
import { move_meta_ailment_namesUpdateWithWhereUniqueWithoutMove_meta_ailmentsInput } from './move-meta-ailment-names-update-with-where-unique-without-move-meta-ailments.input';
import { move_meta_ailment_namesUpdateManyWithWhereWithoutMove_meta_ailmentsInput } from './move-meta-ailment-names-update-many-with-where-without-move-meta-ailments.input';
import { move_meta_ailment_namesScalarWhereInput } from './move-meta-ailment-names-scalar-where.input';

@InputType()
export class move_meta_ailment_namesUpdateManyWithoutMove_meta_ailmentsNestedInput {

    @Field(() => [move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput)
    create?: Array<move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_meta_ailment_namesCreateOrConnectWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_meta_ailment_namesCreateOrConnectWithoutMove_meta_ailmentsInput)
    connectOrCreate?: Array<move_meta_ailment_namesCreateOrConnectWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_meta_ailment_namesUpsertWithWhereUniqueWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_meta_ailment_namesUpsertWithWhereUniqueWithoutMove_meta_ailmentsInput)
    upsert?: Array<move_meta_ailment_namesUpsertWithWhereUniqueWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_meta_ailment_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    set?: Array<move_meta_ailment_namesWhereUniqueInput>;

    @Field(() => [move_meta_ailment_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    disconnect?: Array<move_meta_ailment_namesWhereUniqueInput>;

    @Field(() => [move_meta_ailment_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    delete?: Array<move_meta_ailment_namesWhereUniqueInput>;

    @Field(() => [move_meta_ailment_namesWhereUniqueInput], {nullable:true})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    connect?: Array<move_meta_ailment_namesWhereUniqueInput>;

    @Field(() => [move_meta_ailment_namesUpdateWithWhereUniqueWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_meta_ailment_namesUpdateWithWhereUniqueWithoutMove_meta_ailmentsInput)
    update?: Array<move_meta_ailment_namesUpdateWithWhereUniqueWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_meta_ailment_namesUpdateManyWithWhereWithoutMove_meta_ailmentsInput], {nullable:true})
    @Type(() => move_meta_ailment_namesUpdateManyWithWhereWithoutMove_meta_ailmentsInput)
    updateMany?: Array<move_meta_ailment_namesUpdateManyWithWhereWithoutMove_meta_ailmentsInput>;

    @Field(() => [move_meta_ailment_namesScalarWhereInput], {nullable:true})
    @Type(() => move_meta_ailment_namesScalarWhereInput)
    deleteMany?: Array<move_meta_ailment_namesScalarWhereInput>;
}

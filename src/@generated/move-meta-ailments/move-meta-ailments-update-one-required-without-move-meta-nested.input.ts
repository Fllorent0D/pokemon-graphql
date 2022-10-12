import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailmentsCreateWithoutMove_metaInput } from './move-meta-ailments-create-without-move-meta.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsCreateOrConnectWithoutMove_metaInput } from './move-meta-ailments-create-or-connect-without-move-meta.input';
import { move_meta_ailmentsUpsertWithoutMove_metaInput } from './move-meta-ailments-upsert-without-move-meta.input';
import { move_meta_ailmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';
import { move_meta_ailmentsUpdateWithoutMove_metaInput } from './move-meta-ailments-update-without-move-meta.input';

@InputType()
export class move_meta_ailmentsUpdateOneRequiredWithoutMove_metaNestedInput {

    @Field(() => move_meta_ailmentsCreateWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_ailmentsCreateWithoutMove_metaInput)
    create?: move_meta_ailmentsCreateWithoutMove_metaInput;

    @Field(() => move_meta_ailmentsCreateOrConnectWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_ailmentsCreateOrConnectWithoutMove_metaInput)
    connectOrCreate?: move_meta_ailmentsCreateOrConnectWithoutMove_metaInput;

    @Field(() => move_meta_ailmentsUpsertWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_ailmentsUpsertWithoutMove_metaInput)
    upsert?: move_meta_ailmentsUpsertWithoutMove_metaInput;

    @Field(() => move_meta_ailmentsWhereUniqueInput, {nullable:true})
    @Type(() => move_meta_ailmentsWhereUniqueInput)
    connect?: move_meta_ailmentsWhereUniqueInput;

    @Field(() => move_meta_ailmentsUpdateWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_ailmentsUpdateWithoutMove_metaInput)
    update?: move_meta_ailmentsUpdateWithoutMove_metaInput;
}

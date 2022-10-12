import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailmentsCreateWithoutMove_metaInput } from './move-meta-ailments-create-without-move-meta.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsCreateOrConnectWithoutMove_metaInput } from './move-meta-ailments-create-or-connect-without-move-meta.input';
import { move_meta_ailmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';

@InputType()
export class move_meta_ailmentsCreateNestedOneWithoutMove_metaInput {

    @Field(() => move_meta_ailmentsCreateWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_ailmentsCreateWithoutMove_metaInput)
    create?: move_meta_ailmentsCreateWithoutMove_metaInput;

    @Field(() => move_meta_ailmentsCreateOrConnectWithoutMove_metaInput, {nullable:true})
    @Type(() => move_meta_ailmentsCreateOrConnectWithoutMove_metaInput)
    connectOrCreate?: move_meta_ailmentsCreateOrConnectWithoutMove_metaInput;

    @Field(() => move_meta_ailmentsWhereUniqueInput, {nullable:true})
    @Type(() => move_meta_ailmentsWhereUniqueInput)
    connect?: move_meta_ailmentsWhereUniqueInput;
}

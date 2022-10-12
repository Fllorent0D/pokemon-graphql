import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsCreateWithoutMove_metaInput } from './move-meta-ailments-create-without-move-meta.input';

@InputType()
export class move_meta_ailmentsCreateOrConnectWithoutMove_metaInput {

    @Field(() => move_meta_ailmentsWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_ailmentsWhereUniqueInput)
    where!: move_meta_ailmentsWhereUniqueInput;

    @Field(() => move_meta_ailmentsCreateWithoutMove_metaInput, {nullable:false})
    @Type(() => move_meta_ailmentsCreateWithoutMove_metaInput)
    create!: move_meta_ailmentsCreateWithoutMove_metaInput;
}

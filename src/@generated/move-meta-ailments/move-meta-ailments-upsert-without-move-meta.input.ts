import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailmentsUpdateWithoutMove_metaInput } from './move-meta-ailments-update-without-move-meta.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsCreateWithoutMove_metaInput } from './move-meta-ailments-create-without-move-meta.input';

@InputType()
export class move_meta_ailmentsUpsertWithoutMove_metaInput {

    @Field(() => move_meta_ailmentsUpdateWithoutMove_metaInput, {nullable:false})
    @Type(() => move_meta_ailmentsUpdateWithoutMove_metaInput)
    update!: move_meta_ailmentsUpdateWithoutMove_metaInput;

    @Field(() => move_meta_ailmentsCreateWithoutMove_metaInput, {nullable:false})
    @Type(() => move_meta_ailmentsCreateWithoutMove_metaInput)
    create!: move_meta_ailmentsCreateWithoutMove_metaInput;
}

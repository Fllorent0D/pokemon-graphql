import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailmentsUpdateWithoutMove_meta_ailment_namesInput } from './move-meta-ailments-update-without-move-meta-ailment-names.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput } from './move-meta-ailments-create-without-move-meta-ailment-names.input';

@InputType()
export class move_meta_ailmentsUpsertWithoutMove_meta_ailment_namesInput {

    @Field(() => move_meta_ailmentsUpdateWithoutMove_meta_ailment_namesInput, {nullable:false})
    @Type(() => move_meta_ailmentsUpdateWithoutMove_meta_ailment_namesInput)
    update!: move_meta_ailmentsUpdateWithoutMove_meta_ailment_namesInput;

    @Field(() => move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput, {nullable:false})
    @Type(() => move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput)
    create!: move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput;
}

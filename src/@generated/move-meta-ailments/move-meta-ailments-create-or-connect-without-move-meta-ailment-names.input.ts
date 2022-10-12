import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailmentsWhereUniqueInput } from './move-meta-ailments-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput } from './move-meta-ailments-create-without-move-meta-ailment-names.input';

@InputType()
export class move_meta_ailmentsCreateOrConnectWithoutMove_meta_ailment_namesInput {

    @Field(() => move_meta_ailmentsWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_ailmentsWhereUniqueInput)
    where!: move_meta_ailmentsWhereUniqueInput;

    @Field(() => move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput, {nullable:false})
    @Type(() => move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput)
    create!: move_meta_ailmentsCreateWithoutMove_meta_ailment_namesInput;
}

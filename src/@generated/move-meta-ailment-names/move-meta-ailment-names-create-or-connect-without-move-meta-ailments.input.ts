import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_meta_ailment_namesWhereUniqueInput } from './move-meta-ailment-names-where-unique.input';
import { Type } from 'class-transformer';
import { move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput } from './move-meta-ailment-names-create-without-move-meta-ailments.input';

@InputType()
export class move_meta_ailment_namesCreateOrConnectWithoutMove_meta_ailmentsInput {

    @Field(() => move_meta_ailment_namesWhereUniqueInput, {nullable:false})
    @Type(() => move_meta_ailment_namesWhereUniqueInput)
    where!: move_meta_ailment_namesWhereUniqueInput;

    @Field(() => move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput, {nullable:false})
    @Type(() => move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput)
    create!: move_meta_ailment_namesCreateWithoutMove_meta_ailmentsInput;
}

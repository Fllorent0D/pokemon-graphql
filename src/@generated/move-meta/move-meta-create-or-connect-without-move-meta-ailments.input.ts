import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaWhereUniqueInput } from './move-meta-where-unique.input';
import { Type } from 'class-transformer';
import { move_metaCreateWithoutMove_meta_ailmentsInput } from './move-meta-create-without-move-meta-ailments.input';

@InputType()
export class move_metaCreateOrConnectWithoutMove_meta_ailmentsInput {

    @Field(() => move_metaWhereUniqueInput, {nullable:false})
    @Type(() => move_metaWhereUniqueInput)
    where!: move_metaWhereUniqueInput;

    @Field(() => move_metaCreateWithoutMove_meta_ailmentsInput, {nullable:false})
    @Type(() => move_metaCreateWithoutMove_meta_ailmentsInput)
    create!: move_metaCreateWithoutMove_meta_ailmentsInput;
}

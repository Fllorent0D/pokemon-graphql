import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { move_metaScalarWhereInput } from './move-meta-scalar-where.input';
import { Type } from 'class-transformer';
import { move_metaUpdateManyMutationInput } from './move-meta-update-many-mutation.input';

@InputType()
export class move_metaUpdateManyWithWhereWithoutMove_meta_ailmentsInput {

    @Field(() => move_metaScalarWhereInput, {nullable:false})
    @Type(() => move_metaScalarWhereInput)
    where!: move_metaScalarWhereInput;

    @Field(() => move_metaUpdateManyMutationInput, {nullable:false})
    @Type(() => move_metaUpdateManyMutationInput)
    data!: move_metaUpdateManyMutationInput;
}

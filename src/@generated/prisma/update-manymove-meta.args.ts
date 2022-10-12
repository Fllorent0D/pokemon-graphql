import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_metaUpdateManyMutationInput } from '../move-meta/move-meta-update-many-mutation.input';
import { Type } from 'class-transformer';
import { move_metaWhereInput } from '../move-meta/move-meta-where.input';

@ArgsType()
export class UpdateManymoveMetaArgs {

    @Field(() => move_metaUpdateManyMutationInput, {nullable:false})
    @Type(() => move_metaUpdateManyMutationInput)
    data!: move_metaUpdateManyMutationInput;

    @Field(() => move_metaWhereInput, {nullable:true})
    @Type(() => move_metaWhereInput)
    where?: move_metaWhereInput;
}

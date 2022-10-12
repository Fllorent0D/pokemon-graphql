import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_metaCreateInput } from '../move-meta/move-meta-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnemoveMetaArgs {

    @Field(() => move_metaCreateInput, {nullable:false})
    @Type(() => move_metaCreateInput)
    data!: move_metaCreateInput;
}

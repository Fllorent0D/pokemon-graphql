import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { move_metaWhereInput } from '../move-meta/move-meta-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManymoveMetaArgs {

    @Field(() => move_metaWhereInput, {nullable:true})
    @Type(() => move_metaWhereInput)
    where?: move_metaWhereInput;
}

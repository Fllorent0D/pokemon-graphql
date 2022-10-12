import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { encountersWhereInput } from './encounters-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyencountersArgs {

    @Field(() => encountersWhereInput, {nullable:true})
    @Type(() => encountersWhereInput)
    where?: encountersWhereInput;
}

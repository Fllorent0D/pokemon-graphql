import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hintsWhereInput } from '../stat-hints/stat-hints-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManystatHintsArgs {

    @Field(() => stat_hintsWhereInput, {nullable:true})
    @Type(() => stat_hintsWhereInput)
    where?: stat_hintsWhereInput;
}

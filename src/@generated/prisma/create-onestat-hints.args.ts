import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hintsCreateInput } from '../stat-hints/stat-hints-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOnestatHintsArgs {

    @Field(() => stat_hintsCreateInput, {nullable:false})
    @Type(() => stat_hintsCreateInput)
    data!: stat_hintsCreateInput;
}

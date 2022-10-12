import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hint_namesWhereInput } from '../stat-hint-names/stat-hint-names-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManystatHintNamesArgs {

    @Field(() => stat_hint_namesWhereInput, {nullable:true})
    @Type(() => stat_hint_namesWhereInput)
    where?: stat_hint_namesWhereInput;
}

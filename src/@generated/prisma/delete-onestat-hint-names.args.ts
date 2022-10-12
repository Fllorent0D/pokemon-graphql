import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { stat_hint_namesWhereUniqueInput } from '../stat-hint-names/stat-hint-names-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOnestatHintNamesArgs {

    @Field(() => stat_hint_namesWhereUniqueInput, {nullable:false})
    @Type(() => stat_hint_namesWhereUniqueInput)
    where!: stat_hint_namesWhereUniqueInput;
}

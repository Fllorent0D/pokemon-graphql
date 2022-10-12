import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_group_proseWhereInput } from '../egg-group-prose/egg-group-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyeggGroupProseArgs {

    @Field(() => egg_group_proseWhereInput, {nullable:true})
    @Type(() => egg_group_proseWhereInput)
    where?: egg_group_proseWhereInput;
}

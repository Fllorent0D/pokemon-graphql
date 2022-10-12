import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_group_proseWhereUniqueInput } from '../egg-group-prose/egg-group-prose-where-unique.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteOneeggGroupProseArgs {

    @Field(() => egg_group_proseWhereUniqueInput, {nullable:false})
    @Type(() => egg_group_proseWhereUniqueInput)
    where!: egg_group_proseWhereUniqueInput;
}

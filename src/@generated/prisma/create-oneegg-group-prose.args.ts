import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { egg_group_proseCreateInput } from '../egg-group-prose/egg-group-prose-create.input';
import { Type } from 'class-transformer';

@ArgsType()
export class CreateOneeggGroupProseArgs {

    @Field(() => egg_group_proseCreateInput, {nullable:false})
    @Type(() => egg_group_proseCreateInput)
    data!: egg_group_proseCreateInput;
}

import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_proseWhereInput } from '../ability-prose/ability-prose-where.input';
import { Type } from 'class-transformer';

@ArgsType()
export class DeleteManyabilityProseArgs {

    @Field(() => ability_proseWhereInput, {nullable:true})
    @Type(() => ability_proseWhereInput)
    where?: ability_proseWhereInput;
}

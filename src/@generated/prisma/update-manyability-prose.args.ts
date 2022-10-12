import { Field } from '@nestjs/graphql';
import { ArgsType } from '@nestjs/graphql';
import { ability_proseUpdateManyMutationInput } from '../ability-prose/ability-prose-update-many-mutation.input';
import { Type } from 'class-transformer';
import { ability_proseWhereInput } from '../ability-prose/ability-prose-where.input';

@ArgsType()
export class UpdateManyabilityProseArgs {

    @Field(() => ability_proseUpdateManyMutationInput, {nullable:false})
    @Type(() => ability_proseUpdateManyMutationInput)
    data!: ability_proseUpdateManyMutationInput;

    @Field(() => ability_proseWhereInput, {nullable:true})
    @Type(() => ability_proseWhereInput)
    where?: ability_proseWhereInput;
}

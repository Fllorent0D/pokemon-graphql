import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { experienceGrowth_rate_idLevelCompoundUniqueInput } from './experience-growth-rate-id-level-compound-unique.input';

@InputType()
export class experienceWhereUniqueInput {

    @Field(() => experienceGrowth_rate_idLevelCompoundUniqueInput, {nullable:true})
    growth_rate_id_level?: experienceGrowth_rate_idLevelCompoundUniqueInput;
}

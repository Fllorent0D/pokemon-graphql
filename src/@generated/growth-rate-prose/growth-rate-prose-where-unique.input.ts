import { Field } from '@nestjs/graphql';
import { InputType } from '@nestjs/graphql';
import { growth_rate_proseGrowth_rate_idLocal_language_idCompoundUniqueInput } from './growth-rate-prose-growth-rate-id-local-language-id-compound-unique.input';

@InputType()
export class growth_rate_proseWhereUniqueInput {

    @Field(() => growth_rate_proseGrowth_rate_idLocal_language_idCompoundUniqueInput, {nullable:true})
    growth_rate_id_local_language_id?: growth_rate_proseGrowth_rate_idLocal_language_idCompoundUniqueInput;
}
